FROM ubuntu

RUN apt-get update -qq && DEBIAN_FRONTEND=noninteractive apt-get -q -y install libpq-dev build-essential curl git zlib1g-dev libssl-dev libreadline-dev libyaml-dev libxml2-dev libxslt-dev libsqlite3-dev nodejs-legacy nodejs-dev npm

ENV DEVISE_SECRET_KEY="028eedbf57a4905bbd3ff721f88c75c3f9cd948ad313e955ceabf102615fa24eb2c55ade1f61aa9050edace0e8d1b1fddfe6b94288b9172181692714a1bda77c" \
    RAILS_ENV="production" \
    SECRET_KEY_BASE="$(openssl rand -base64 32)" \
    RUBY_VERSION="2.3.0" \
    CONFIGURE_OPTS="--disable-install-doc" \
    PATH="/root/.rbenv/bin:/root/.rbenv/shims:$PATH"

RUN git clone https://github.com/sstephenson/rbenv.git ~/.rbenv \
    && git clone https://github.com/sstephenson/ruby-build.git ~/.rbenv/plugins/ruby-build \
    && ~/.rbenv/plugins/ruby-build/install.sh \
    && echo 'eval "$(rbenv init -)"' >> ~/.bashrc \
    && rbenv install $RUBY_VERSION \
    && rbenv global $RUBY_VERSION \
    && echo "gem: --no-ri --no-rdoc" > ~/.gemrc \
    && gem install bundler
RUN mkdir -p /app
WORKDIR /app
COPY Gemfile* /app/
RUN bundle install --without development test --jobs 4
COPY . /app/
RUN bundle exec rake assets:precompile

EXPOSE 3000