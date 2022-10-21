Rails.application.routes.draw do

  resources :admins, only: [:index]

  #Authentication Routes
  post "/login", to: "sessions#create"

  get "/me", to: "users#show"

  delete "/logout", to: "sessions#destroy"
  
end