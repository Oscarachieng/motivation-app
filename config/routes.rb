Rails.application.routes.draw do
  resources :article_comment_replies
  resources :article_comments
  resources :articles
  resources :staffs
  resources :admins, only: [:index]
  
end