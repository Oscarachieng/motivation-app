class ArticleComment < ApplicationRecord
    validates :comment,:user_id,:article_id,:likes, presence: true
    belongs_to :article
end
