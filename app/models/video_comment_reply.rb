class VideoCommentReply < ApplicationRecord
    validates :user_id,:video_comment_id, :reply,:likes, presence:true
    belongs_to :user
    belongs_to :video_comment
end
