class ArticleCommentReply < ApplicationRecord
    validates :user_id,:article_comment_id,:reply,:likes, presence: true
    belongs_to :article_comment
    belongs_to :user
end
