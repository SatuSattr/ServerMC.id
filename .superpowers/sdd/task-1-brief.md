# Task 1: Git Branching & GitHub Protection

**Files:**
- Modify: repository on GitHub

**Steps:**

- [ ] 1. Create dev branch from main

```bash
git checkout main
git pull origin main
git checkout -b dev
git push origin dev
git branch --set-upstream-to=origin/dev dev
```

- [ ] 2. Protect main branch with GitHub CLI

```bash
gh api repos/SatuSattr/servermc.id/branches/main/protection \
  --method PUT \
  --field required_status_checks='null' \
  --field enforce_admins=false \
  --field required_pull_request_reviews='{"required_approving_review_count":1}' \
  --field restrictions='null'
```

- [ ] 3. Set default branch to dev

```bash
gh api repos/SatuSattr/servermc.id \
  --field default_branch=dev
```

- [ ] 4. Commit the changes to main

```bash
git checkout main
git add .
git commit -m "chore: setup dev branch and main branch protection"
git push origin main
```
