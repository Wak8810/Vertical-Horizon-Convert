#include <utility>
#include <map>
#include <iomanip>
#include <iostream>
#include <pair>

using namespace std;
using ll = long long;
#define rep(i, n) for (int i = 0; i < (int)(n); i++)

int main(){
  int n,t,sigma;cin>>n>>t>>sigma;
  vector<pair<int,int>> box;
  int w,h;
  for(int i=0;i<n;i++){
    cin >> w >> h;
    box.push_back({w,h});
  }
  
  //cout << n << endl;
  int width,count=0,r,b;
  char d;
  vector<tuple<int,int,char,int>> sout;
  for(int j=0;j<n;j++){
    if(j==0 && box[j].first < box[j].second){
      sout.push_back(make_tuple(j,1,'U',-1));
      //cout << j << " " << 1 << " " << "U" << " " << -1 << endl;
      width = box[j].second;
      continue;
    }else if(j == 0){
      sout.push_back(make_tuple(j,0,'U',-1));
      //cout << j << " " << 0 << " " << "U" << " " << -1 << endl;
      width = box[j].first;
      continue;
    }
    if(box[j].first < box[j].second){
      r = 0;
      if(count == 0){
        count += box[j].first;
        b = j-1;
        d = 'L';
      }else{
        if(width < count){
          count = box[j].first;
          b = -1;
          d = 'U';
        }else{
          count += box[j].first;
          b = j-1;
          d = 'U';
        }
      }
    }else{
      r = 1;
      if(count == 0){
        count += box[j].second;
        b = j-1;
        d = 'L';
      }else{
        if(width < count){
          count = box[j].second;
          b = -1;
          d = 'U';
        }else{
          count += box[j].second;
          b = j-1;
          d = 'U';
        }
      }
    }
    sout.push_back(make_tuple(j,r,d,b));
    //cout << j << " " << r << " " << d << " " << b << endl;
  }
  int ind,rot,bef;
  char uorl;
  for(int i=0;i<t;i++){
    cout << n << endl;
    for(auto& item:sout){
      tie(ind,rot,uorl,bef)= item;
      cout << ind << " " << rot << " " << uorl << " " << bef << endl;
    }
  }
}