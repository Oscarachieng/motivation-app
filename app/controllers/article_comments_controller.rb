class ArticleCommentsController < ApplicationController
    
    #GET /article_comments
    def index        
        render json:ArticleComment.all                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
    end

    #GET /article_comments/:id
    def show
        article_comment = find_a_comment
        render json:article_comment
    end

    #POST /article_comments
    def create
        article_comment = ArticleComment.create!(article_comment_params)
        render json: article_comment
    end

    #PATCH /article_comments/:id
    def update
        article_comment = find_a_comment
        article_comment.update!(article_comment_params)
        render json:article_comment, status: :accepted
    end

    #DELETE /article_comments/:id
    def destroy
      article_comment = find_a_comment
      article_comment.destroy
      head :no_content
    end

    private
    #permit params
    def article_comment_params
        params.permit(:user_id,:article_id,:comment,:likes)
    end

    #find an article comment
    def find_a_comment
        article_comment = ArticleComment.find(params[:id])
    end
end
