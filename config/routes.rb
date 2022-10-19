Rails.application.routes.draw do
  resources :students
  resources :staffs
  resources :admins, only: [:index]
  
end
