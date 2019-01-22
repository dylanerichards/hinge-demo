Rails.application.routes.draw do
  get "/*path", to: "react#index" if Rails.env.production?

  resources :questions
  resources :users

end
