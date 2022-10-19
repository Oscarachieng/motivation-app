class StaffsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound,with: :render_record_not_found


    wrap_parameters false
 ## Controller Actions
 #GET index
    def index 
        staff_members = Staff.all 
        render json: staff_members, status: :ok
    end

    #GET show /:id 
    def show 
        a_staff_member =find_staff_member
        render json: a_staff_member, status: :ok      
    end

    private
    #find a staff member 
    def find_staff_member
        Staff.find(params[:id])
    end

    #RecordNotFound Handler 
    def render_record_not_found
        render json: { error: " Staff Not found"}, status: :not_found 
    end
    
    
    
end
