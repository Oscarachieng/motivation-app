class ArticleCommentRepliesController < ApplicationController
    #GET /article_comment_replies
    def index
        render json: ArticleCommentReply.all
    end

    #GET /article_comment_replies
    def show
        render json:find_article_reply
    end
    #POST /article_comment_replies
    def create
        article_comment_reply  = ArticleCommentReply.create!(article_comment_reply_params)
        render json: article_comment_reply
    end

    #PATCH /article_comment_replies/:id
    def update
        article_comment_reply = find_article_reply
        article_comment_reply.update!(article_comment_reply_params)
        render json: article_comment_reply, status: :accepted
    end

    #DELETE /article_comment_replies/:id
    def destroy
        article_comment_reply = find_article_reply
        article_comment_reply.destroy
        head :no_content
    end

    private
    #find one reply
    def find_article_reply
       article_comment_reply = ArticleCommentReply.find(params[:id])
    end
    
    #Permit params
    def article_comment_reply_params
        params.permit(:likes,:user_id,:article_comment_id,:reply)
    end

end
