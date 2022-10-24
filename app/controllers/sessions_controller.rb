class SessionsController < ApplicationController
    #session creation for user login
    def create
        user = User.find_by(email: params[:email])
        if user&.authenticate(params[:password])
          session[:user_id] = user.id
          render json: user, status: :created
        else
          render json: { error: "Invalid username or password" }, status: :unauthorized
        end
    end

    # 

    # session termination for logout
    def destroy
        session.delete :user_id
        head :no_content
    end
    
end
