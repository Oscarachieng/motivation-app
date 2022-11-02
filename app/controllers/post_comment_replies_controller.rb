class PostCommentRepliesController < ApplicationController
    
    #GET /article_comment_replies
    def index
        render json: PostCommentReply.all
    end

    #GET /article_comment_replies
    def show
        render json:find_post_comment_reply
    end
    #POST /article_comment_replies
    def create
        post_comment_reply  = PostCommentReply.create!(reply_params)
        render json: post_comment_reply
    end

    #PATCH /article_comment_replies/:id
    def update
        post_comment_reply = find_post_comment_reply
        post_comment_reply.update!(reply_params)
        render json: post_comment_reply, status: :accepted
    end

    #DELETE /article_comment_replies/:id
    def destroy
        post_comment_reply = find_post_comment_reply
        post_comment_reply.destroy
        head :no_content
    end

    private
    #find one reply
    def find_post_comment_reply
       post_comment_reply = PostCommentReply.find(params[:id])
    end
    
    #Permit params
    def reply_params
        params.permit(:likes,:user_id,:post_comment_id,:reply)
    end

end
