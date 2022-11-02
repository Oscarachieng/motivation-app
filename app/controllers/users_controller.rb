class UsersController < ApplicationController
        
    # GET /users
         def index
            users = User.all
            
            render json: users, status: :ok
          end
        
          # POST /users
          def create
            user = User.new(user_params)
            user.avatar_url.attach(params[:avatar_url])
            user.save!()
            render json: user, status: :created
          end
        
          # GET /users/:id
          def show
            user = find_user
            render json: user, status: :ok
          end
        
          # PATCH /users/:id
          def update
            user = find_user
            user.update!(user_params)
            render json: user,status: :accepted
          end
        
        
          # DELETE /users/:id
          def destroy
            user = find_user
            user.destroy
            head :no_content
          end

          #Stay logged in
          def stay_logged_in
            @user = User.find_by(id: session[:user_id]) || Admin.find_by(id: session[:user_id])
            if @user
              render json: @user
            else
              render json: { error: "Not authorized" }, status: :unauthorized
            end
          end

          private
  
          def find_user
            User.find(params[:id])
          end
        
          def user_params
            params.permit(:first_name, :last_name, :email, :username, :avatar_url, :password, :user_category)
          end
end
