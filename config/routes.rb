Rails.application.routes.draw do
  resources :staffs, only: [:index, :show]
  resources :admins, only: [:index, :show]
  
end
