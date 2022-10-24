class ArticlesController < ApplicationController
    #GET /articles
    def index
        render json: Article.all
    end

    #GET /articles/:id
    def show
        article = find_an_article
        render json: article
    end

    #POST /articles
    def create
        article  = Article.create!(article_params)
        render json: article, status: :created
    end

    #PATCH /articles/:id
    def update
        article = find_an_article
        article.update!(article_params)
        render json: article, status: :accepted
    end

    #DELETE /articles/:id
    def destroy
        article = find_an_article
        article.destroy
        head :no_content
    end

    private
    #fetch a single article
    def find_an_article
       articles = Article.find(params[:id])
    end

    #permit params
    def article_params
      params.permit(:title,:content,:is_approved,:likes,:is_flagged,:category_id,:user_id)
    end
    
end
