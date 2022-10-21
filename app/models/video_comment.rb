class VideoComment < ApplicationRecord
    validates :comment,:likes,:user_id,:video_id
    belongs_to :user
    belongs_to :video
    has_many :video_comment_replies
end
