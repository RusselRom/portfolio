class AlbumsController < ApplicationController
  def index
    @albums = Album.all
  end

  def show
    @photos = Album.find(params[:id]).photos
  end
end