Rails.application.routes.draw do
  resources :audios
  resources :students
  resources :staffs
  resources :admins, only: [:index]
  
end
