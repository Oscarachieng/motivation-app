class AdminsController < ApplicationController
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

  private
  #Admin params
  def admin_params 
    params.permit(:first_name, :last_name, :email, :password)
  end

  def find_admin
    Admin.find(params[:id])
  end
  

    
end
