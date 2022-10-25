Rails.application.routes.draw do
    resources :admins
    resources :users
    resources :audios
    resources :audio_comments
    resources :audio_comment_replies
    resources :articles
    resources :articles_comments
    resources :articles_comment_replies
    resources :videos 
    resources :video_comments 
    resources :video_comment_replies

 #Authenication routes for users 
 
    
 end
