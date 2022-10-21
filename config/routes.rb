Rails.application.routes.draw do
  resources :video_comment_replies
  resources :video_comments
  resources :videos
  resources :audio_comment_replies
  resources :audio_comments
  resources :audios
  resources :article_comment_replies
  resources :article_comments
  resources :articles
  resources :admins, only: [:index]
  
end