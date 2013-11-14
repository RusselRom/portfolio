class Photo < ActiveRecord::Base
  belongs_to :album, inverse_of: :photos
  attr_accessible :id, :album_id, :image

  has_attached_file :image, :styles => {
      :thumb => "100x100#",
      :small  => "150x150",
      :medium => "700x300" }

  rails_admin do
    list do
      field :id
      field :album
      field :image
    end

    edit do
      field :album
      field :image
    end
  end
end
