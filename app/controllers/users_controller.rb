class UsersController < ApplicationController
        
    # GET /users
        def index
            users = User.all
            render json: users
          end
        
          # POST /users
          def create
            user = User.create!(user_params)
            render json: user, status: :created
          end
        
          # GET /users/:id
          def show
            user = find_user
            render json: user
          end
        
          # PATCH /users/:id
          def update
            user = find_user
            user.update!(user_params)
            render json: user
          end
        
        
          # DELETE /users/:id
          def destroy
            user = find_user
            user.destroy
            head :no_content
          end

          private
  
          def find_user
            User.find(params[:id])
          end
        
          def user_params
            params.permit(:first_name, :last_name, :email, :username, :avatar_url, :password_digest, :user_category)
          end
end
