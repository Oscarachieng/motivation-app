class AudioCommentReply < ApplicationRecord
    validates :user_id,:audio_comment_id,:comment,:likes, presence:true
    belongs_to :audio_comment
    belongs_to :user
end
