Rails.application.routes.draw do
  resources :article_comment_replies
  resources :article_comments
  resources :articles
  
  resources :staffs
  resources :admins

  #Authentication Routes
  post "/login", to: "sessions#create"

  get "/me", to: "users#show"

  delete "/logout", to: "sessions#destroy"
  
end