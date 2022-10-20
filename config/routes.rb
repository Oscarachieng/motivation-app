Rails.application.routes.draw do
  resources :audio_comments
  resources :audios
  resources :students
  resources :staffs
  resources :admins, only: [:index]
  
end
