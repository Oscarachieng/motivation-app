class SessionsController < ApplicationController
  skip_before_action :authorize, only: [:create]
    #session creation for user login
    def create
        user = User.find_by(email: params[:email]) || Admin.find_by(email: params[:email])
        if user&.authenticate(params[:password])
          session[:user_id] = user.id
          render json: user, status: :created
        else
          render json: { error: "Invalid email or password" }, status: :unauthorized
        end
    end


    # def create 
      
    #   puts params
      
    #   if params[:user_category]
    #     @user = User.find_by(email: params[:email])
    #     if @user && @user.authenticate(params[:password])
    #       session[:staff_id] = @user.id
    #       render json: @user, status: :created
    #     else
    #       render json: { error: "Invalid username or password" }, status: :unauthorized
    #     end
    #   elsif !params[:user_category]
    #     @admin = Admin.find_by(email: params[:email])
    #     if @admin && @admin.authenticate(params[:password])
    #       session[:admin_id] = @admin.id
    #       render json: @admin, status: :created
    #     else
    #       render json: { error: "Invalid Email or password" }, status: :unauthorized
    #     end
    #   end
    #   end

    # 

    # session termination for logout
    def destroy
        session.delete :user_id
        head :no_content
    end
    
end
