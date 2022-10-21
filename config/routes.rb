Rails.application.routes.draw do
  resources :wishes
  resources :users
  resources :audio_comment_replies
  resources :article_comment_replies
  resources :article_comments
  resources :articles
  resources :audio_comment_replies
  resources :audio_comments
  resources :audios
  resources :admins, only: [:index]

  #Authentication Routes
  post "/login", to: "sessions#create"

  get "/me", to: "users#show"

  delete "/logout", to: "sessions#destroy"
  
end