class PostsController < ApplicationController
    
    #GET /articles
    def index
        render json: Post.all
    end

    #GET /articles/:id
    def show
        post = find_a_post
        render json: post
    end

    #POST /articles
    def create
        post  = Post.create!(article_params)
        render json: post, status: :created
    end

    #PATCH /articles/:id
    def update
        post = find_a_post
        post.update!(article_params)
        render json: post, status: :accepted
    end

      # PATCH /articles/:id/like
    def increment_likes
        post = find_a_post
        post.update(likes: post.likes + 1)
        render json: post
    end

    def approve_post
        post = find_a_post
        post.update(is_approved: !post.is_approved)
        render json: post
    end

    #DELETE /articles/:id
    def destroy
        post = find_an_article
        post.destroy
        head :no_content
    end

    private
    #fetch a single post
    def find_a_post
       articles = Post.find(params[:id])
    end

    #permit params
    def post_params
      params.permit(:title,:content,:is_approved,:content_type,:likes,:is_flagged,:category_id,:user_id)
    end
    
end
