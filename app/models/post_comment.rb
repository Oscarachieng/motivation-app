class PostComment < ApplicationRecord
    validates :comment,:user_id,:post_id,:likes, presence: true
    belongs_to :post
    belongs_to :user
    has_many :post_comment_replies
end
