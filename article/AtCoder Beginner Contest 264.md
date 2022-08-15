---
title: 'AtCoder Beginner Contest 264'
author: 'Ghjattu'
date: '2022-08-15'
updated: '2022-08-15'
slug: 'atcoder-beginner-contest-264'
---



## 题目链接

[AtCoder Beginner Contest 264](https://atcoder.jp/contests/abc264)

## C Matrix Reducing

### 思路

因为行数和列数都不超过10，因此可以暴力枚举保留的行和列。以行为例，用一个长度为 $H_1$ 的二进制串来表示某一行的删除或保留，用 $0$ 表示保留、$1$表示删除，例如 $00101$ 代表删除第 0 行和第 2 行。当保留的行数等于 $H_2$ 且保留的列数等于 $W_2$ 时再遍历矩阵中的元素判断是否相等。

### 代码

```cpp
#include <bits/stdc++.h>

using namespace std;

typedef long long ll;
const int N = 10 + 7;
const ll INF = 0x3f3f3f3f3f3f3f3f;
const ll MOD = 1e9 + 7;
int h1, w1, h2, w2, a[N][N], b[N][N];
vector<int> saveR, saveC;

bool check() {
    for (int i = 0; i < h2; i++) {
        for (int j = 0; j < w2; j++) {
            if (b[i][j] != a[saveR[i]][saveC[j]])
                return false;
        }
    }
    return true;
}

int main() {
//#ifndef ONLINE_JUDGE
//    freopen("in.txt", "r", stdin);
//#endif

    cin >> h1 >> w1;
    for (int i = 0; i < h1; i++)
        for (int j = 0; j < w1; j++)
            cin >> a[i][j];
    cin >> h2 >> w2;
    for (int i = 0; i < h2; i++)
        for (int j = 0; j < w2; j++)
            cin >> b[i][j];

    for (int i = 0; i < (1 << h1); i++) {
        for (int j = 0; j < (1 << w1); j++) {
            saveR.clear();
            saveC.clear();
            for (int k = 0; k < h1; k++)
                if ((i & (1 << k)) == 0)
                    saveR.push_back(k);
            for (int k = 0; k < w1; k++)
                if ((j & (1 << k)) == 0)
                    saveC.push_back(k);
            if (saveR.size() != h2 || saveC.size() != w2)
                continue;

            if (check()) {
                cout << "Yes";
                return 0;
            }
        }
    }
    cout << "No";


    return 0;
}
```

## D "redocta".swap(i,i+1)

### 思路

直接按照 r,e,d,o,c,t,a 的字符顺序依次在输入字符串中交换到它应该的位置即可。

### 代码

```cpp
#include <bits/stdc++.h>

using namespace std;

typedef long long ll;
const int N = 1e5 + 7;
const ll INF = 0x3f3f3f3f3f3f3f3f;
const ll MOD = 1e9 + 7;
string s;
string d = "atcoder";

int main() {
//#ifndef ONLINE_JUDGE
//    freopen("in.txt", "r", stdin);
//#endif

    cin >> s;
    int ans = 0;
    for (int i = d.length() - 1; i > 0; i--) {
        int pos = 0;
        while (s[pos] != d[i])
            pos++;
        ans += i - pos;
        for (int j = pos; j < i; j++)
            swap(s[j], s[j + 1]);
    }
    cout << ans;

    return 0;
}
```

## E Blackout 2

### 思路

该题和”给一个图，若干次询问永久删除一条边后连通块的个数“相似，思路也类似：最开始用不会被删除的边建图，然后逆向处理每个询问，也就是不断模拟加边操作。具体来说，将 $n$ 个城市顶点和 $m$ 个电厂顶点分开，对城市顶点维护一个并查集数组 $f[\cdot]$ ，若 $f[v]>n$ 说明城市 $v$ 被点亮。初始图建好后，对每个电厂顶点 $v$ 执行一次 dfs，更新能访问到的城市顶点 $u$ 的信息，即令 $f[u]=v$，同时统计初始情况下被点亮的城市个数 $cnt$。然后对于每次询问，设当前需要加的边为 $(u,v)$，有三种情况：

1. $u$ 和 $v$ 均是电厂，这种情况不会对答案 $cnt$ 产生任何影响，可以直接忽略
2. $u$ 是城市，$v$ 是电厂，这种情况下，若 $u$ 已被点亮，则 $cnt$ 不变；否则，$cnt$ 需加上 $u$ 所在连通块的大小（连通块顶点个数），同时更新连通块内城市顶点的 $f[\cdot]$ 信息
3. $u$ 和 $v$ 均是城市，又可分为三种情况：
   1. $u$ 和 $v$ 均被点亮，不会对 $cnt$ 产生影响，直接忽略
   2. $u$ 点亮，$v$ 不亮，此时 $u$ 相当于电厂，处理思路与上述第 2 种情况相同
   3. $u$ 和 $v$ 均不亮，不会直接改变 $cnt$ ，但需要在图中加入这条边

最后逆序输出即可。

### 代码

```cpp
#include <bits/stdc++.h>

using namespace std;

typedef long long ll;
const int N = 2e5 + 7;
const int M = 5e5 + 7;
const ll INF = 0x3f3f3f3f3f3f3f3f;
const ll MOD = 1e9 + 7;
struct Edge {
    int u, v;
    bool isBreak;
} edge[M];
int n, m, e, q;
int query[M], f[N], vis[N], cnt;
vector<int> graph[N];
vector<int> ans;

void init() {
    for (int i = 0; i < N; i++)
        f[i] = i;
}

void dfs(int u, int fa) {
    f[u] = fa;
    vis[u] = 1;
    if (u <= n)
        cnt++;
    for (int v: graph[u]) {
        if (v > n || vis[v])
            continue;
        dfs(v, fa);
    }
}

int find(int x) {
    if (x != f[x])
        f[x] = find(f[x]);
    return f[x];
}

void unionSet(int x, int y) {
    x = find(x);
    y = find(y);
    if (x == y)
        return;
    f[x] = y;
}

int main() {
//#ifndef ONLINE_JUDGE
//    freopen("in.txt", "r", stdin);
//#endif

    cin >> n >> m >> e;
    for (int i = 1; i <= e; i++)
        cin >> edge[i].u >> edge[i].v;
    cin >> q;
    for (int i = 0; i < q; i++) {
        cin >> query[i];
        edge[query[i]].isBreak = true;
    }

    init();
    for (int i = 1; i <= e; i++) {
        if (!edge[i].isBreak) {
            graph[edge[i].u].push_back(edge[i].v);
            graph[edge[i].v].push_back(edge[i].u);
        }
    }

    for (int i = n + 1; i <= n + m; i++)
        dfs(i, i);
    ans.push_back(cnt);

    for (int i = q - 1; i > 0; i--) {
        int u = edge[query[i]].u, v = edge[query[i]].v;
        if (u > v)
            swap(u, v);
        if (u <= n && v > n) {
            if (find(u) <= n) {
                dfs(u, v);
            }
        } else if (v <= n) {
            int fu = find(u), fv = find(v);
            if (fu <= n && fv > n)
                dfs(u, fv);
            else if (fu > n && fv <= n)
                dfs(v, fu);
            else {
                graph[u].push_back(v);
                graph[v].push_back(u);
            }
        }
        ans.push_back(cnt);
    }

    for (auto itr = ans.rbegin(); itr != ans.rend(); itr++)
        cout << *itr << "\n";

    return 0;
}
```

