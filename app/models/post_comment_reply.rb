class PostCommentReply < ApplicationRecord
    validates :user_id,:post_comment_id,:reply,:likes, presence: true
    belongs_to :post_comment
    belongs_to :user
end
