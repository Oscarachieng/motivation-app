Rails.application.routes.draw do
  resources :categories
  resources :students
  resources :staffs
  resources :admins, only: [:index]
  
end
