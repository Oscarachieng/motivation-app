class studentsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    # GET /students
    def index
      students = Student.all
      render json: students
    end
  
    # POST /students
    def create
      student = Student.create(student_params)
      render json: student, status: :created
    end
  
    # GET /students/:id
    def show
      student = find_student
      render json: student
    end
  
    # PATCH /students/:id
    def update
      student = find_student
      student.update(student_params)
      render json: student
    end
  
  
    # DELETE /students/:id
    def destroy
      student = find_student
      student.destroy
      head :no_content
    end
  
    private
  
    def find_student
      student.find(params[:id])
    end
  
    def student_params
      params.permit(:first_name, :last_name, :email, :avatar_url, :username, :password_digest)
    end
  
    def render_not_found_response
      render json: { error: "Student not found" }, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end
