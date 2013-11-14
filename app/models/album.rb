class Album < ActiveRecord::Base
  attr_accessible :id, :name, :description
  has_many :photos, :dependent => :destroy
  accepts_nested_attributes_for :photos, :reject_if => lambda {|a| a[:content].blank? } , :allow_destroy => true


  rails_admin do
    list do
      field :id
      field :name
      field :description
    end

    edit do
      field :name
      field :description
    end
  end
end
