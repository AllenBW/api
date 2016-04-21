ruby '2.3.0'

source 'https://rubygems.org'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 4.2.6'

# Use postgresql as the database for Active Record
gem 'pg', '~> 0.18.2'
gem 'pg_search', '~> 0.7.8'
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw]

# Pagination
gem 'will_paginate', '~> 3.0.7'

# .Env gem Gem
gem 'dotenv-rails'

# Use ActiveModel has_secure_password
gem 'bcrypt', '~> 3.1.7', require: 'bcrypt'

# Use puma as the app server
gem 'puma'

# Use responders
gem 'responders'

# Authentication
gem 'devise'
gem 'omniauth'

# Authorization
gem 'pundit'

gem 'time_for_a_boolean'

# Adds enhanced pub/sub hooks
gem 'wisper'

# HTML
gem 'angular-rails-templates'
# Remove asset requests from the logs
gem 'quiet_assets', group: :development

# CSS
gem 'bootstrap-sass'
gem 'sass-rails'
gem 'autoprefixer-rails'
gem 'nokogiri'
gem 'font-awesome-rails'

# JavaScript
gem 'ngannotate-rails', '~> 1.2', '>= 1.2.1'
gem 'coffee-rails'
gem 'uglifier'

# UX dependencies
source 'https://rails-assets.org' do
  gem 'rails-assets-lodash', '~> 3.10.0'
  gem 'rails-assets-moment', '~> 2.10.0'
  gem 'rails-assets-toastr', '~> 2.1.0'
  gem 'rails-assets-jquery', '~> 2.1.0'
  gem 'rails-assets-bootstrap-sass-official', '~> 3.3.0'
  gem 'rails-assets-ngDraggable', '~> 0.1.8'
  gem 'rails-assets-angular', '~> 1.4.0'
  gem 'rails-assets-angular-animate', '~> 1.4.0'
  gem 'rails-assets-angular-aria', '~> 1.4.0'
  gem 'rails-assets-angular-bootstrap', '~> 0.13.0'
  gem 'rails-assets-angular-messages', '~> 1.4.0'
  gem 'rails-assets-angular-resource', '~> 1.4.0'
  gem 'rails-assets-angular-sanitize', '~> 1.4.0'
  gem 'rails-assets-angular-ui-router', '~> 0.2.0'
  gem 'rails-assets-angular-filter', '~> 0.5.4'
  gem 'rails-assets-angular-smart-table', '~> 2.1.0'
  gem 'rails-assets-angular-ui-sortable', '~> 0.13.3'
  gem 'rails-assets-api-check'
  gem 'rails-assets-angular-formly', '~> 7.1.0'
  gem 'rails-assets-angular-marked', '~> 1.0.1'
  gem 'rails-assets-angularjs-color-picker'
  gem 'rails-assets-highcharts', '~> 4.1.6'
  gem 'rails-assets-highcharts-ng', '~> 0.0.8'
end

# Tests
group :development, :test do
  gem 'annotate'
  gem 'awesome_print'
  gem 'brakeman', require: false
  gem 'codeclimate-test-reporter', require: nil
  gem 'database_cleaner', '~> 1.5.1'
  gem 'factory_girl_rails', '~> 4.0'
  gem 'license_finder'
  gem 'pry-rails'
  gem 'rspec-rails', '~> 3.0'
  gem 'rubocop'
  gem 'seed_dump'
  gem 'selenium-webdriver'
  gem 'test_after_commit'
  # gem 'poltergeist', require: 'capybara/poltergeist'
  gem 'spring'
  gem 'spring-commands-rspec'
  # gem 'web-console', '~> 2.0.0'
  # gem 'capybara-angular', '0.1.0'
  # gem 'launchy'
  gem 'foreman'

  # Dev dependencies
  source 'https://rails-assets.org' do
    gem 'rails-assets-angular-mocks', '~> 1.4.0'
    gem 'rails-assets-sinon'
    gem 'rails-assets-bardjs', '~> 0.1.0'
  end

  gem 'jellyfish-demo', github: 'projectjellyfish/jellyfish-demo'
end

group :test do
  gem 'rake' # for travis
  gem 'shoulda-matchers', '2.8.0', require: false
end

# Documentation
gem 'apipie-rails', '0.3.3'

# Keep but hide deleted records
gem 'paranoia'

# Communicating with external services
gem 'rest-client'
gem 'virtus'

# CRONTAB SCHEDULER
gem 'rufus-scheduler'

# ActiveRecord DelayedJob
gem 'delayed_job_active_record'

# Daemons for DelayedJob
gem 'daemons'

# Get picky about what is put into responses
gem 'active_model_serializers', '~> 0.8.0'

# Gems for Content Pages
gem 'friendly_id'
gem 'paper_trail'

gem 'sass'

group :production, :staging do
  gem 'rails_12factor'
end

# Add Tags
gem 'acts-as-taggable-on'

# Sortable Items
gem 'acts_as_list'

# TO ENCODE DECIMALS AS JSON NUMBERS
gem 'activesupport-json_encoder'

# Resource filtering with scopes
gem 'has_scope'

# ActiveRecord JSON Validator
gem 'activerecord_json_validator'
