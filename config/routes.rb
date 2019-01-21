Rails.application.routes.draw do
  resources :questions
  resources :users

  get "/*path", to: "react#index"
end
