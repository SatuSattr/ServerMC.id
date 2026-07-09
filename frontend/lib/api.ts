const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/api';
const CSRF_URL = process.env.NEXT_PUBLIC_CSRF_URL || 'http://localhost:8080/sanctum/csrf-cookie';

let csrfInitialized = false;

async function ensureCsrf(): Promise<void> {
  if (csrfInitialized) return;
  await fetch(CSRF_URL, { credentials: 'include' });
  csrfInitialized = true;
}

interface ApiResponse<T> {
  data: T | null;
  error: { code: string; message: string } | null;
}

async function request<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  await ensureCsrf();

  const res = await fetch(`${API_BASE}${endpoint}`, {
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  });

  if (res.status === 204) {
    return { data: null, error: null };
  }

  return res.json();
}

export const api = {
  get: <T>(endpoint: string) =>
    request<T>(endpoint, { method: 'GET' }),

  post: <T>(endpoint: string, body?: unknown) =>
    request<T>(endpoint, {
      method: 'POST',
      body: body ? JSON.stringify(body) : undefined,
    }),

  put: <T>(endpoint: string, body?: unknown) =>
    request<T>(endpoint, {
      method: 'PUT',
      body: body ? JSON.stringify(body) : undefined,
    }),

  patch: <T>(endpoint: string, body?: unknown) =>
    request<T>(endpoint, {
      method: 'PATCH',
      body: body ? JSON.stringify(body) : undefined,
    }),

  delete: <T>(endpoint: string) =>
    request<T>(endpoint, { method: 'DELETE' }),

  upload: async <T>(endpoint: string, formData: FormData) => {
    await ensureCsrf();
    const res = await fetch(`${API_BASE}${endpoint}`, {
      method: 'POST',
      credentials: 'include',
      body: formData,
    });
    return res.json() as Promise<ApiResponse<T>>;
  },
};
