class ArticleComment < ApplicationRecord
    validates :comment,:user_id,:article_id,:likes, presence: true
    belongs_to :article
    belongs_to :user
    has_many :article_comment_replies
end
