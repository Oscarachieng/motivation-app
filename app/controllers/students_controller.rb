class StudentsController < ApplicationController
   
    # GET /students
    def index
      students = Student.all
      render json: students
    end
  
    # POST /students
    def create
      student = Student.create!(student_params)
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
      student.update!(student_params)
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
      Student.find(params[:id])
    end
  
    def student_params
      params.permit(:first_name, :last_name, :email, :avatar_url, :username, :password_digest)
    end
  
   
end
