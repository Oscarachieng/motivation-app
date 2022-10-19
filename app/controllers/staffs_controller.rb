class StaffsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound,with: :render_record_not_found
rescue_from ActiveRecord::RecordInvalid, with: :render_record_invalid


    wrap_parameters format: []
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

    #POST Create 
    def create
        new_staff_member = Staff.create!(staff_params)
        render json: new_staff_member, status: :created
    end

    #PATCH update 
    def update
        staff_member = find_staff_member 
        staff_member.update!(staff_params)
        render json: staff_member, status: :accepted
    end

    #DELETE destroy 
    def destroy
        staff_member = find_staff_member 
        staff_member.destroy 
        head :no_content
    end
    
    
    

    private

    #staff_params 
    def staff_params
        params.permit(:first_name,:last_name,:email, :password)
    end
    
    #find a staff member 
    def find_staff_member
       Staff.find(
       params[:id]
       ) 
    end

    #RecordNotFound Handler 
    def render_record_not_found
        render json: { error: " Staff Not found"}, status: :not_found 
    end
    
    #RecordInvalid error handler
    def render_record_invalid(invalid) 
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
    
end
