package respond

import (
	"encoding/json"
	"net/http"
)

type envelope struct {
	Data  any        `json:"data"`
	Error *respError `json:"error"`
}

type respError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

func JSON(w http.ResponseWriter, status int, data any) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(status)
	json.NewEncoder(w).Encode(envelope{Data: data, Error: nil})
}

func Error(w http.ResponseWriter, status int, code, message string) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(status)
	json.NewEncoder(w).Encode(envelope{Data: nil, Error: &respError{Code: code, Message: message}})
}
