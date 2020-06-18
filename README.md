# gpal1126.github.io
## [햄의 포트폴리오 보기](https://gpal1126.github.io/)
- 햄의 포트폴리오 만들기  
- 프로젝트 이미지는 swiper를 이용한 슬라이드로 적용  

### 사용 기술 및 스펙
Ruby 2.x ver
Bundler 2.x ver
gem 3.x ver
yml


## 레파지토리 생성하기
![create](https://user-images.githubusercontent.com/15043631/82905746-353c9280-9f9f-11ea-819d-38becdf24af2.png)

> Repository name : [유저아이디].github.io 로 입력한다.

> Public으로 생성한다!

> 빠른 적용을 위해 Initialize this repository with a README 체크한다.




## 테마 적용
테마 url: https://github.com/sproogen/modern-resume-theme

![copy_templete](https://user-images.githubusercontent.com/15043631/82905829-4e454380-9f9f-11ea-9da0-082ced7ebed6.png)

> cd [복사될 프로젝트 경로]

> git clone [복사할 테마 git 주소]


## Ruby 설치하기 : 테마 실행하기 위해 필요
Ruby Download url : https://rubyinstaller.org/downloads/

![ruby_version](https://user-images.githubusercontent.com/15043631/82914682-c6fdcd00-9faa-11ea-8523-745d4e9b781c.png)

## Ruby Command 실행
해당 프로젝트 경로로 이동

``` 
cd [프로젝트 경로] 
D:\github>cd gpal1126.github.io
```

### 번들 설치시 아래와 같은 에러 발생하면
```
D:\github\gpal1126.github.io>bundle install
Traceback (most recent call last):
        2: from C:/Ruby26-x64/bin/bundle.cmd:31:in `<main>'
        1: from C:/Ruby26-x64/lib/ruby/2.6.0/rubygems.rb:302:in `activate_bin_path'
C:/Ruby26-x64/lib/ruby/2.6.0/rubygems.rb:283:in `find_spec_for_exe': Could not find 'bundler' (2.1.0) required by your D:/github/gpal1126.github.io/Gemfile.lock. (Gem::GemNotFoundException)
To update to the latest version installed on your system, run `bundle update --bundler`.
To install the missing version, run `gem install bundler:2.1.0`
```

### 버전을 지정하여 번들러 설치
```
gem install bundler:2.1.0
```

### 번들 설치
```
bundle install
```

### jekyll 실행
```
bundle exec jekyll serve
```

### url : localhost:4000 으로 실행

