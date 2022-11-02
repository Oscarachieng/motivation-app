class PostCommentsController < ApplicationController
    
    #GET /article_comments
    def index        
        render json:PostComment.all
    end

    #GET /article_comments/:id
    def show
        post_comment = find_a_comment
        render json:post_comment
    end

    #POST /article_comments
    def create
        post_comment = PostComment.create!(post_comment_params)
        render json: post_comment
    end

    #PATCH /article_comments/:id
    def update
        post_comment = find_a_comment
        post_comment.update!(post_comment_params)
        render json:post_comment, status: :accepted
    end

    #DELETE /article_comments/:id
    def destroy
      post_comment = find_a_comment
      post_comment.destroy
      head :no_content
    end

    private
    #permit params
    def post_comment_params
        params.permit(:user_id,:post_id,:comment,:likes)
    end

    #find an article comment
    def find_a_comment
        PostComment.find(params[:id])
    end
end
