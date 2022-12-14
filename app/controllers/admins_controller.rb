class AdminsController < ApplicationController
  # skip_before_action :authorize, only: [:index]
# GET index
    def index
        admins = Admin.all 
        render json: admins
    end

#GET show 
  def show 
    admin = find_admin 
    render json: admin, status: :ok
  end   

#POST create 
  def create 
    new_admin = Admin.create!(admin_params)
    render json: new_admin, status: :created
  end

#PATCH update 
  def update 
      admin = find_admin 
      admin.update!(admin_params)
      render json: admin, status: :accepted
  end

#DELETE destroy 
   def destroy 
     admin = find_admin;
     admin.destroy
     head :no_content
   end

   #staying logged in
  #  def is_logged_in 
  #   admin = Admin.find_by(id: session[:user_id])
  #   if admin
  #     render json: admin
  #   else
  #     render json: { error: "Not authorized" }, status: :unauthorized
  #   end
  #  end

  private
  #Admin params
  def admin_params 
    params.permit(:first_name, :last_name, :email, :password)
  end

  def find_admin
    Admin.find(params[:id])
  end

end
