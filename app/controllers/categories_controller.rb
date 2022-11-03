class CategoriesController < ApplicationController
   
    # GET /categories
    def index
      categories = Category.all
      render json: categories
    end
  
    # POST /categories
    def create
      category = Category.create!(category_params)
      render json: category, status: :created
    end
  
    # GET /categories/:id
    def show
      category = find_category
      render json: category
    end
  
    # PATCH /categories/:id
    def update
      category = find_category
      category.update!(category_params)
      render json: category
    end
  
  
    # DELETE /categories/:id
    def destroy
      category = find_category
      category.destroy
      head :no_content
    end
  
    private
  
    def find_category
      Category.find(params[:id])
    end
  
    def category_params
      params.permit(:category)
    end
  
   
end
