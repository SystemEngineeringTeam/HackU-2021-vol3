package apifunc

import "net/http"

func OptionsHandler(methods ...string) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Headers", "*")

		m := ""
		for i, v := range methods {
			m += v
			if i != len(methods)-1 {
				m += ", "
			}
		}

		w.Header().Set("Access-Control-Allow-Methods", m)

		w.WriteHeader(http.StatusOK)
	}
}

func AllowCorsMiddleware(next http.HandlerFunc) http.HandlerFunc {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Headers", "*")
		w.Header().Set("Access-Control-Allow-Methods", r.Method)

		next(w, r)
	})
}
