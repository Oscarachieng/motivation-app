class AdminsController < ApplicationController
# rescue_from ActiveRecord::RecordInvalid,with: :render_admin_record_not_found

    #GET index
    def index
        admins = Admin.all 
        render json: admins, status: :ok
    end
    
    #GET show
    def show
        an_admin = find_admin
        render json: an_admin, status: :ok
    end

    private 
    #find Admin helper
    def find_admin 
        Admin.find(
            params[:id]
            )
    end

    #render RecordNotFound 
    def render_admin_record_not_found
        render json: { error: "Admin Not found" }, status: :not_found 
    end
    
    
end
