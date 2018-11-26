class PagesController < ApplicationController
  before_action :info, only: :play

  def play
  end

  def create
    color = params[:info][:color]
    name = params[:info][:name]
    session[:info] = { color: color, name: name }
    cookies[:color] = color
    cookies[:name] = name
    redirect_to action: :play
  end

  private

  def info
    return if session[:info].present?

    render 'info'
  end
end
