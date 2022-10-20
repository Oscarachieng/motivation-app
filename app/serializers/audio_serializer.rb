class AudioSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :is_approved, :likes, :is_flagged
end
