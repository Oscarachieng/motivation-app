class WishesController < ApplicationController
    # GET /wishes
    def index
        wishes = Wish.all
        render json: wishes
      end
    
      # POST /wishes
      def create
        wish = Wish.create!(wish_params)
        render json: wish, status: :created
      end
    
      # GET /wishes/:id
      def show
        wish = find_wish
        render json: wish
      end
    
      # PATCH /wishes/:id
      def update
        wish = find_wish
        wish.update!(wish_params)
        render json: wish
      end
    
    
      # DELETE /wishes/:id
      def destroy
        wish = find_wish
        wish.destroy
        head :no_content
      end

      private

      def find_wish
        Wish.find(params[:id])
      end
    
      def wish_params
        params.permit(:first_name, :last_name, :email, :wishname, :avatar_url, :password_digest, :wish_category)
      end
end
