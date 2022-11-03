Rails.application.routes.draw do
    resources :categories
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
 post "/login", to: "sessions#create"
 get "/me", to: "users#stay_logged_in"
 delete "/logout", to: "sessions#destroy"
#  get "/an_admin", to: "admins#is_logged_in"
 patch '/like', to: "articles#increment_likes"  
 end
